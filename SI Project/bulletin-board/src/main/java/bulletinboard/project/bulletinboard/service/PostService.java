package bulletinboard.project.bulletinboard.service;

import bulletinboard.project.bulletinboard.Domain.Models.Image;
import bulletinboard.project.bulletinboard.Domain.Models.Post;

import java.util.List;

public interface PostService {
    //List<Post> getAllPosts();
    List<Post> getAllPostsWithDate();
    int createPost(Post post);
    Post findById(String id);
    boolean hidePost(String id);
    boolean addImage(Image image);
    List<Image> getImages();
    List<Post> getAll();
}
