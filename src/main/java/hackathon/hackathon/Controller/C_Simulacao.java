package hackathon.hackathon.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class C_Simulacao {

    @GetMapping("/")
    public String getSimulacao(){
        return "/simulacao";
    }

}
