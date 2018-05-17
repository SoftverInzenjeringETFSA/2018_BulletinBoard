package bulletinboard.project.bulletinboard.service;

import bulletinboard.project.bulletinboard.Domain.Models.Image;
import bulletinboard.project.bulletinboard.Domain.Models.Post;

import bulletinboard.project.bulletinboard.Domain.Models.SocialMediaPost;

import bulletinboard.project.bulletinboard.Repositories.ImageRepository;
import bulletinboard.project.bulletinboard.Repositories.PostRepository;
import bulletinboard.project.bulletinboard.Repositories.SocialMediaPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired

    private SocialMediaPostRepository socialMediaPostRepository;

//    @Override
//    public List<Post> getAllPosts() {
//        return postRepository.getAllPosts();
//    }

    private ImageRepository imageRepository;

    public List<Post> getAllPosts() {
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
    public Post findById(UUID id) {
//        List<Post> posts = postRepository.findAll();
//        if(!posts.isEmpty())
//        {
//            posts.stream()
//                    .filter(item -> item.getId().equals(id))
//                    .collect(Collectors.toList());
//            return posts.get(0);
//        }
//        return null;

        List<Post> posts = postRepository.returnPostById(id);
        return posts.get(0);
    }

    @Override
    public boolean hidePost(UUID id) {
        Post post = this.findById(id);
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
        return socialMediaPostRepository.save(post).getId();

    }

    @Override
    public List<SocialMediaPost> getAllSocialMediaPosts() {
        return socialMediaPostRepository.findAll();

    }
    public List<Image> getImages()
    {
        return imageRepository.findAll();
    }

    public boolean addImage(Image image) {
        imageRepository.insert(image);
        return true;
    }

    public List<Post> getAll()
    {
        return postRepository.findAll();
    }
}
