import Link from "next/link";

const clientProjects = () => {
  const clients =[
    {id:"Ebrahim", name:"Ebrahim"},
    {id:"John", name:"John"},
    {id:"Jane", name:"Jane"},
  ];
  return (
    <div>
      <h1> clientProjects</h1>
      <ul>
       {
         clients.map((client)=>(
           <li key={client.id}>
             <Link href={`/clients/${client.id}/${client.name}`}>
               {client.name}
             </Link>
           </li>
       ))}
      </ul>
    </div>
  );
}

export default clientProjects;