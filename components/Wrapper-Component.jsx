import loadable from '@loadable/component'

const Head = loadable(()=>import("./Head-Component"))
const Navigation = loadable(()=>import("./Navigation/NavigationLanding-Component"))

export default function Wrapper({title, description, children}){
  return(
    <>
      <Head title={title} description={description}></Head>
      <Navigation></Navigation>
      <div className="z-0">
        {children}
      </div>            
    </>
  )
}