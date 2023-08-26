import { useRouter } from "next/router";


const portfolioProjectPage = () => {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
    

  return <div>portfolioProjectPage</div>;
}

export default portfolioProjectPage;