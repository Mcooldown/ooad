import loadable from "@loadable/component";

const Wrapper = loadable(()=>import("../../components/WrapperDashboard-Component"))

export default function Dashboard(){
  return(
    <Wrapper title="Lman - Dashboard" description="Halaman khusus untuk setiap user">
      <p>Hello</p>
    </Wrapper>
  )
}