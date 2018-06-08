package bulletinboard.project.bulletinboard.Controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import bulletinboard.project.bulletinboard.Domain.Models.User;
import bulletinboard.project.bulletinboard.Repositories.UserRepository;
import bulletinboard.project.bulletinboard.service.SecurityService;
import bulletinboard.project.bulletinboard.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.List;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import java.time.LocalDateTime;
import java.util.UUID;

@RestController
public class DefaultController {
    @Autowired
    private UserService userService;

    @Autowired
    private SecurityService securityService;

    @Autowired
    private UserRepository userRepository;

    private static final Logger logger = LoggerFactory.getLogger(DefaultController.class);

    @RequestMapping(value = "/registration", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public void registration(@RequestBody User userData) {
        User user = new User();
        user.setCreated(LocalDateTime.now());
        user.setId(UUID.randomUUID());
        user.setPassword(userData.getPassword());
        user.setUsername(userData.getUsername());
        user.setFirstName(userData.getFirstName());
        user.setLastName(userData.getLastName());
        user.setEmail(userData.getEmail());
        userService.save(user);
        securityService.autologin(user.getUsername(), userData.getPassword());
    }

    @RequestMapping(value = {"/", "/welcome"}, method = RequestMethod.GET)
    public String welcome(Model model) {
        return "Welcome, you are logged in!";
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public User login(@RequestBody User userData) {
       BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
       User user = userRepository.findByUsername(userData.getUsername());
       if( user !=  null && encoder.matches(userData.getPassword(),user.getPassword()) ) {
            securityService.autologin(user.getUsername(),userData.getPassword());
       }
       logger.error(String.format("Auto login %s successfully!", SecurityContextHolder.getContext().getAuthentication().getPrincipal()));

       return user;
    } 

    @RequestMapping(value="/logmeout", method = RequestMethod.POST)
    public void logoutPage (HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        logger.error(String.format("Auto login %s successfully!", SecurityContextHolder.getContext().getAuthentication().getPrincipal()));
        if (auth != null){
        new SecurityContextLogoutHandler().logout(request, response, auth);
        }
    }  

    @RequestMapping(value="/loggeduser", method = RequestMethod.GET)
    public Object loggeduser (HttpServletRequest request, HttpServletResponse response) {
        return SecurityContextHolder.getContext().getAuthentication().getPrincipal();      
        
    } 

    @RequestMapping(value="/getAllUsers", method = RequestMethod.GET)
    public List<User> getAllUsers () {
         return userService.getAllUsers();     
        
    } 

    @RequestMapping(value = "/deleteUser", method = RequestMethod.POST)
    public List<User> deleteUser(@RequestBody User userData) {
        userService.deleteUser(userService.findByUsername(userData.getUsername()));
        return userService.getAllUsers(); 
    } 

    
    
}
