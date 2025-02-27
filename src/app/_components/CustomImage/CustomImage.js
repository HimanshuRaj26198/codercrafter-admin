import { mergeAttributes } from "@tiptap/core";
import Image from "@tiptap/extension-image";

const CustomImage = Image.extend({
    addAttributes() {
        return {
            ...this.parent?.(),
            alt: { default: null },
            width: { default: "100%" }, // Default width
        };
    },

    addCommands() {
        return {
            setImage:
                (options) =>
                    ({ commands }) => {
                        return commands.insertContent({
                            type: this.name,
                            attrs: options,
                        });
                    },
        };
    },

    addNodeView() {
        return ({ node, getPos, editor }) => {
            const container = document.createElement("div");
            container.style.position = "relative";
            container.style.display = "inline-block";
            container.style.cursor = "pointer";

            const img = document.createElement("img");
            img.src = node.attrs.src;
            img.alt = node.attrs.alt;
            img.style.width = node.attrs.width;
            img.style.maxWidth = "100%";
            img.style.height = "auto";
            img.style.border = "1px solid transparent";

            // Add border on selection
            img.addEventListener("click", () => {
                editor.commands.setNodeSelection(getPos());
                img.style.border = "2px solid blue";
            });

            // Resize Handle
            const resizeHandle = document.createElement("div");
            resizeHandle.style.position = "absolute";
            resizeHandle.style.bottom = "0";
            resizeHandle.style.right = "0";
            resizeHandle.style.width = "10px";
            resizeHandle.style.height = "10px";
            resizeHandle.style.background = "blue";
            resizeHandle.style.cursor = "nwse-resize";
            resizeHandle.style.display = "none";

            container.addEventListener("mouseenter", () => {
                resizeHandle.style.display = "block";
            });
            container.addEventListener("mouseleave", () => {
                resizeHandle.style.display = "none";
            });

            // Resize Logic
            let isResizing = false;
            resizeHandle.addEventListener("mousedown", (event) => {
                event.preventDefault();
                isResizing = true;

                const startX = event.clientX;
                const startWidth = img.offsetWidth;

                const onMouseMove = (moveEvent) => {
                    if (!isResizing) return;
                    const newWidth = startWidth + (moveEvent.clientX - startX);
                    img.style.width = `${newWidth}px`;

                    // Update the node attributes to save the width change
                    editor.chain().focus().updateAttributes("image", { width: `${newWidth}px` }).run();
                };

                const onMouseUp = () => {
                    isResizing = false;
                    document.removeEventListener("mousemove", onMouseMove);
                    document.removeEventListener("mouseup", onMouseUp);
                };

                document.addEventListener("mousemove", onMouseMove);
                document.addEventListener("mouseup", onMouseUp);
            });

            // Delete Button
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "✖";
            deleteButton.style.position = "absolute";
            deleteButton.style.top = "5px";
            deleteButton.style.right = "5px";
            deleteButton.style.background = "red";
            deleteButton.style.color = "white";
            deleteButton.style.border = "none";
            deleteButton.style.cursor = "pointer";
            deleteButton.style.display = "none";

            deleteButton.addEventListener("click", () => {
                editor.chain().focus().deleteNode("image").run();
            });

            container.addEventListener("mouseenter", () => (deleteButton.style.display = "block"));
            container.addEventListener("mouseleave", () => (deleteButton.style.display = "none"));

            container.appendChild(img);
            container.appendChild(resizeHandle);
            container.appendChild(deleteButton);

            return {
                dom: container,
                update: (updatedNode) => {
                    if (updatedNode.attrs.src !== node.attrs.src) {
                        img.src = updatedNode.attrs.src;
                    }
                    if (updatedNode.attrs.width !== node.attrs.width) {
                        img.style.width = updatedNode.attrs.width;
                    }
                },
            };
        };
    },
});

export default CustomImage;