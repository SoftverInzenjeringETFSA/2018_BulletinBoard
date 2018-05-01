package bulletinboard.project.bulletinboard.Controllers;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Account")
public class AccountController {

    @RequestMapping(value = "/Login", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.OK)
    public void login(String email) {

    }
}
