import CMSForm from "@/app/_components/CMSForm/page";
import CmsLoader from "@/app/_components/Loader/page";
const PostPage = () => {
    return <>
        <CmsLoader />
        <h1 className="text-xxl text-center" >Create A Post</h1>
        <CMSForm />
    </>
}


export default PostPage;