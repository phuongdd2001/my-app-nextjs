import Layout from "@/components/layout"
import { User } from "@/interfaces"
import Link from "next/link"
import { GetStaticProps } from 'next'
import { sampleUserData } from "@/utils/sample-data"
import List from "@/components/List"

type Props = {
 items: User[]   
}

const WithStaticProps = ({ items }: Props ) => (
    <Layout title="User List | next.js" >
        <h1>Users List</h1>
        <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
        <List items={items} />
        <Link href="/" >
        Go Home
        </Link>
    </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
    const items: User[] = sampleUserData
    return {props: {items}}

}

export default WithStaticProps;