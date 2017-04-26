package example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/server/*")
public class AppVersionController {

    @GetMapping("version")
    public @ResponseBody
    AppVersion version() {
        return new AppVersion().withNumber("42");
    }
}
