import { useRouter } from "next/router"
const finishedProjects = () => {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
  return (
    <div>finishedProjects</div>
  )
}

export default finishedProjects