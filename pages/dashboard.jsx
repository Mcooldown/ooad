import loadable from "@loadable/component";

const Wrapper = loadable(() => import("../components/WrapperDashboard-Component"))

export default function Dashboard() {
  return (
    <Wrapper title="Learning Management System for School - Dashboard" description="Learning Management System for School - Dashboard">
      <p>Hello</p>
    </Wrapper>
  )
}