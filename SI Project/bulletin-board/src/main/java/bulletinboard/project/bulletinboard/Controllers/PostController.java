package bulletinboard.project.bulletinboard.Controllers;


import bulletinboard.project.bulletinboard.Domain.Models.Image;
import bulletinboard.project.bulletinboard.Domain.Models.Post;
import bulletinboard.project.bulletinboard.Domain.Models.SocialMediaPost;
import bulletinboard.project.bulletinboard.service.PostService;
import jdk.nashorn.api.scripting.JSObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/Post")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class PostController {

    @Autowired
    private PostService postService;

//    @RequestMapping("/getAllPosts")
//    public List<Post> getAllPosts() {
//        return postService.getAllPosts();
//    }

    @RequestMapping("/get")
    public Post getPost(UUID id) {
        return postService.findById(id);
    }

    @RequestMapping("/getAll")
    public List<Post> getAll()
    {
        System.out.println("Get all");
        return postService.getAll();
    }

    @RequestMapping("/add")
    public UUID addPost(@RequestBody Post post) {
        return postService.createPost(post);
    }

    @RequestMapping("/addImage")
    public boolean addImage(@RequestBody Image image)
    {
        return postService.addImage(image);
    }

    @RequestMapping("/getImages")
    public List<Image> getImages()
    {
        return postService.getImages();
    }

    @RequestMapping("/getAllPostsWithDate")
    public List<Post> getAllPostsWithDate() {
        return postService.getAllPostsWithDate();
    }

    @RequestMapping("/getPostWithDate")
    public Post getPostWithDate(UUID id) {
        return postService.findById(id);
    }

    @PostMapping("/addPostWithDate")
    public UUID addPostWithDate(Post post) {
        return postService.createPost(post);
    }

    @PostMapping("/hidePost/{id}")
    public boolean hidePost(@PathVariable UUID id) {
        return postService.hidePost(id);
    }

    @PostMapping("/addSocialMediaPost")
    public UUID addSocialMediaPost(String url, String provider) {
        return postService.createSocialMediaPost(new SocialMediaPost(provider, url));
    }

    @RequestMapping("/getSocialMediaPosts")
    public List<SocialMediaPost> getSocialMediaPosts() {
        return postService.getAllSocialMediaPosts();
    }
}
