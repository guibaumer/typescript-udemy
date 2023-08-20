import isEmail from 'validator/lib/isEmail';
function validarForm(formClass: string, e: Event) {
  e.preventDefault();
  const form = document.querySelector(formClass) as HTMLFormElement;
  if (typeof form !== 'object') return console.log('ERRO! Não é object.');
  const nomeInput = form.querySelector('.username') as HTMLInputElement;
  const emailInput = form.querySelector('.email') as HTMLInputElement;
  const passwordInput = form.querySelector('.password') as HTMLInputElement;
  const passwordTwoInput = form.querySelector('.password2') as HTMLInputElement;
  const formFields = form.querySelectorAll('.form-fields');
  const erros: Array<string> = [];

  //apaga as mensagens de erro e limpa o array
  erros.length = 0;
  const msgs = form.querySelectorAll('.error-message-dois');
  if (msgs.length > 0) {
    for (const msg of msgs) {
      msg.remove();
    }
  }
  for (const div of formFields) {
    div.classList.remove('show-error-message');
  }

  //checa se estão vazios
  for (const div of formFields) {
    const input = div.querySelector('input');
    if (input) {
      if (!input.value) {
        // div.classList.add('show-error-message');
        // div.querySelector('.error-message').innerText = 'Este campo não pode ser vazio.';
        criarErro('Este campo não pode ser vazio3.', div);
        erros.push('empty');
      }
    }
  }

  //checa o email
  if (emailInput) {
    if (!isEmail(emailInput.value)) {
      criarErro('Email inválido.', formFields[1]);
      erros.push('invalid');
    }
  }

  if (passwordInput.value) {
    if (passwordTwoInput.value) {
      const boolean = passwordInput.value === passwordTwoInput.value;
      if (!boolean) {
        // formFields[3]
        criarErro('Senhas não correspondem.', formFields[3]);
        erros.push('wrong');
      }
    }
  }

  if (erros.length > 0) return console.log('NÃO PODE SER ENVIADO.');
  form.submit();
}

// mexi no lugar, se não estiver funcionando, olhar aqui em baixo:
function criarErro(texto: string, lugar: HTMLElement): void {
  const span = document.createElement('span');
  span.classList.add('error-message-dois');
  span.innerText = texto;
  lugar.appendChild(span);
}

const button = document.querySelector('#send-button');
if (button) {
  button.addEventListener('click', (e) => {
    validarForm('.form', e);
  });
}
