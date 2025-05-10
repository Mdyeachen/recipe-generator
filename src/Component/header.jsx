import shape from "./../assets/images/chef.svg";

export default function Header(){
   return (
      <header className="header">
         <div className="contain flex flex-ac flex-jc f-gap-10">
            <img src={shape} alt="Recipe" />
            <h1>Chef Claude</h1>
         </div>
      </header>
   )
}