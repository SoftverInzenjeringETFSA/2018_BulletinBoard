package bulletinboard.project.bulletinboard.service;

import bulletinboard.project.bulletinboard.Domain.Models.BasePost;
import bulletinboard.project.bulletinboard.Domain.Models.Image;
import bulletinboard.project.bulletinboard.Domain.Models.Post;
import bulletinboard.project.bulletinboard.Domain.Models.SocialMediaPost;

import java.util.List;
import java.util.UUID;

public interface PostService {

    List<Post> getAllPostsWithDate();
    UUID createPost(Post post);
    BasePost findById(UUID id);
    boolean hidePost(UUID id);

    UUID createSocialMediaPost(SocialMediaPost post);
    List<SocialMediaPost> getAllSocialMediaPosts();

    boolean addImage(Image image);
    List<Image> getImages();
    List<BasePost> getAll();
    List<BasePost> getByUser(UUID id);
}
