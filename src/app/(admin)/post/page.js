import CMSForm from "@/app/_components/CMSForm/page";
import CMSForm2 from "@/app/_components/CMSForm2/page";
import CmsLoader from "@/app/_components/loader/page";
const PostPage = () => {
    return <>
        <CmsLoader />
        <h1 className="text-xxl text-center" >Create A Post</h1>
        <CMSForm2 />
    </>
}


export default PostPage;