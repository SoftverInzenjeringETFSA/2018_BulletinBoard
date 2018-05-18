package bulletinboard.project.bulletinboard.service;

import bulletinboard.project.bulletinboard.Domain.Models.BasePost;
import bulletinboard.project.bulletinboard.Domain.Models.Image;
import bulletinboard.project.bulletinboard.Domain.Models.Post;

import bulletinboard.project.bulletinboard.Domain.Models.SocialMediaPost;

import bulletinboard.project.bulletinboard.Repositories.ImageRepository;
import bulletinboard.project.bulletinboard.Repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;

//    @Override
//    public List<Post> getAllPosts() {
//        return postRepository.getAllPosts();
//    }

    private ImageRepository imageRepository;

    public List<BasePost> getAllPosts() {
        return postRepository.findAll();
    }

    @Override
    public List<Post> getAllPostsWithDate() {
        return postRepository.getAllPostsWithDate();
    }

    @Override
    public UUID createPost(Post post) {
        post.setId(UUID.randomUUID());
        postRepository.insert(post);
        return post.getId();
    }

    @Override
    public BasePost findById(UUID id) {
        List<BasePost> posts = postRepository.returnPostById(id);
        return posts.get(0  );
    }

    @Override
    public boolean hidePost(UUID id) {
        BasePost post = this.findById(id);
        if(post != null)
        {
            if (!post.isHidden()) {
                post.setHidden(true);

            }
            else {
                post.setHidden(false);
            }
            postRepository.save(post);
            return true;
        }
        return false;
    }


    @Override
    public UUID createSocialMediaPost(SocialMediaPost post) {
        post.setId(UUID.randomUUID());
        post.setDateCreated(new Date());
        return postRepository.save(post).getId();

    }

    @Override
    public List<SocialMediaPost> getAllSocialMediaPosts() {
        return postRepository.getAllSocialMediaPosts();

    }
    public List<Image> getImages()
    {
        return imageRepository.findAll();
    }

    public boolean addImage(Image image) {
        imageRepository.insert(image);
        return true;
    }

    public List<BasePost> getAll()
    {
        return postRepository.findAll();
    }
}
