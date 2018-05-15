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
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.List;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;

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
    public void registration(@RequestBody User user) {
        userService.save(user);
        securityService.autologin(user.getUsername(), user.getPassword());
    }

    @RequestMapping(value = {"/", "/welcome"}, method = RequestMethod.GET)
    public String welcome(Model model) {
        return "welcome";
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public User login(@RequestBody User userData) {
       BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
       User user = userRepository.findByUsername(userData.getUsername());
       if( user !=  null && encoder.matches(userData.getPassword(),user.getPassword()) ) {
            securityService.autologin(user.getUsername(),userData.getPassword());
       }

       return userData;
    } 

    @RequestMapping(value="/logout", method = RequestMethod.POST)
    public void logoutPage (HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();      
        if (auth != null){
        new SecurityContextLogoutHandler().logout(request, response, auth);
        }
    }  
}
