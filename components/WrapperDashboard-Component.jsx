import loadable from '@loadable/component'

const Head = loadable(()=>import("./Head-Component"))
const Navigation = loadable(()=>import("./Navigation/NavigationDashboard-Component"))

export default function Wrapper({title, description, children}){
  return(
    <>
      <Head title={title} description={description}></Head>
      <Navigation>
        {children}  
      </Navigation>                 
    </>
  )
}