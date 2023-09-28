import postModel from "../Models/postModel.js";

// Create Post
export const createPost = async (req, res) => {
  const { title, desc, category, imageUrl } = req.body;
  try {
    const newPost = new postModel({
      title,
      desc,
      category,
      imageUrl,
    });
    await newPost.save();
    res.status(200).json({ message: "Thêm tin thành công" });
    // if (video) {
    //   const result = await cloudinary.uploader.upload(video, {
    //     resource_type: 'video',
    //     upload_preset: 'upload_video_unsigned',
    //     allowed_formats: ['mp4', 'mkv'],
    //   })
    //   const newPost = new postModel({
    //     userId,
    //     desc,
    //     hastags,
    //     status,
    //     video: { public_id: result.public_id, url: result.secure_url },
    //   })
    //   await newPost.save()
    //   res.status(200).json(newPost)
    // } else if (image) {
    //   const result = await cloudinary.uploader.upload(image, {
    //     upload_preset: 'upload_image_unsigned',
    //     allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif'],
    //   })
    //   const newPost = new postModel({
    //     userId,
    //     desc,
    //     hastags,
    //     status,
    //     image: { public_id: result.public_id, url: result.secure_url },
    //   })
    //   await newPost.save()
    //   res.status(200).json(newPost)
    // } else {
    //   const newPost = new postModel(req.body)
    //   await newPost.save()
    //   res.status(200).json(newPost)
    // }
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getPost = async (req, res) => {
  try {
    const listPost = await postModel.find();
    res.status(200).json(listPost);
  } catch (error) {
    res.status(500).json(error);
  }
};
