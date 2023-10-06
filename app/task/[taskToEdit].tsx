import { useRouter } from "next/router";

const bloge =()=>{
    const router = useRouter();
    const task = router.query.taskToEdit;
    
    return (
        <div>
        <h1>{task}</h1>
        </div>
    );

}
export default bloge
