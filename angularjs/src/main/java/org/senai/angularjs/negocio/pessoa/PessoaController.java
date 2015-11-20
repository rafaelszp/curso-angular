package org.senai.angularjs.negocio.pessoa;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pessoaController")
public class PessoaController {

	@RequestMapping(value = "/olaMundo", method = RequestMethod.POST)
	public String olaMundo(@RequestParam("nome") String nome) {
		return "Olá " + nome;
	}
}
