import { NextApiRequest, NextApiResponse } from "next";
import { handleCloudinaryDelete } from "@/app/lib/cloudinary";

export async function OPTIONS(
  req: Request,
  res: any,
  { params }: { params: { slug: string } }
) {
  const id = params.slug;

  switch (req.method) {
    case "DELETE": {
      try {
        if (!id) {
          throw new Error("No ID provided");
        }

        const result = await handleDeleteRequest(id);

        return res.status(200).json({ message: "Success", result });
      } catch (error) {
        console.error(error);
        return res.status(400).json({ message: "Error", error });
      }
    }

    default: {
      return res.status(405).json({ message: "Method not allowed" });
    }
  }
}

const handleDeleteRequest = (id: any) => {
  // Delete the uploaded image from Cloudinary
  return handleCloudinaryDelete([id.replace(":", "/")]);
};
