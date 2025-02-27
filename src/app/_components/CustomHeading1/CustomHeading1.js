import { Heading } from '@tiptap/extension-heading';

const CustomHeading = Heading.extend({
    addAttributes() {
        return {
            ...this.parent?.(), // Preserve existing attributes
            class: {
                default: null, // Default class (can be null or a specific class)
                renderHTML: (attributes) => {
                    if (attributes.level === 1) {
                        return { class: 'lg:text-2xl text-xl font-semibold mb-6' }; // Add a class for h1
                    }
                    if (attributes.level === 3) {
                        return { class: "text-xl font-semibold pt-2" }
                    }
                    return {}; // No class for other heading levels
                },
            },
        };
    },
});

export default CustomHeading;