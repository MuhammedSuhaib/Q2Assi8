import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Blog {
  _id: string;
  title: string;
  description: string;
  description2: string;
  heading: string;
  heading2: string;
  mainImage: { asset: { url: string } };
  mainImage2: { asset: { url: string } };
  mainImage3: { asset: { url: string } };
  publishedAt: string;
}

export default async function Home() {
  const data: Blog[] = await client.fetch(`*[_type == "blog"]{
    _id,
    title,
    description,
    description2,
    heading,
    heading2,
    mainImage,
    mainImage2,
    mainImage3,
    publishedAt
  }`);
  
return (
    <div className="p-6 bg-green-50 ">
      <div className="grid gap-4 mt-4">
        {data.map((blog) => (
          <Card key={blog._id}>
            <CardHeader>
              <h1 className="text-5xl mb-4 font-bold">{blog.title}</h1>
              <h2 className="text-xl font-semibold">{blog.heading} </h2>
            </CardHeader>
            <CardContent>
              <p className="text-base font-serif font-medium">
                {blog.description}
              </p>
              <h2 className="text-xl font-semibold my-4">{blog.heading2} </h2>
              <p className="text-base font-serif font-medium">
                {blog.description2}
              </p>
              <div className="flex gap-4 justify-between my-4" >
                <img
                  src={urlFor(blog.mainImage).url()}
                  alt="Blog image"
                  className="mt-2 rounded-md shadow-md"
                />
                <img
                  src={urlFor(blog.mainImage2).url()}
                  alt="Blog image"
                  className="mt-2 rounded-md shadow-md"
                />
                <img
                  src={urlFor(blog.mainImage3).url()}
                  alt="Blog image"
                  className="mt-2 rounded-md shadow-md"
                />
              </div>
            </CardContent>
            <CardFooter>
              <span>
                Published on: {new Date(blog.publishedAt).toDateString()}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
