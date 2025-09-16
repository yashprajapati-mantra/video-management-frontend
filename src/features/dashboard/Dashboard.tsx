
import useApi from "../../hooks/useApi";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};


export default function Dashboard() {
    const { data, loading, error } = useApi<Post[]>(
        "https://jsonplaceholder.typicode.com/posts"
    );

    console.log("Dashboard rendered");

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            {/* <button
                onClick={refetch}
                className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
                Refresh
            </button> */}
            {loading && <div>Loading...</div>}
            {Boolean(error) && <div className="text-red-600">Failed to fetch posts</div>}
            <ul className="space-y-4">
                {data?.slice(0, 10).map((post) => (
                    <li key={post.id} className="p-4 border rounded-xl shadow-sm bg-white">
                        <h2 className="font-semibold text-lg">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
