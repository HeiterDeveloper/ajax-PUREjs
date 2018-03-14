# ajax-PUREjs
Simples função para agilizar uma requisição por JS Ajax

### Instalação
 

```html
<script src="ajax-PUREjs.js" type="text/javascript"></script>
```
### Utilização

```html 
<script>
ajax({
    isUnset: function(){
    //faça algo
    },
    isOpened: function(){
      //faça algo
    },
    issetHeaders: function(headers){
      //faça algo com os headers
    },
    isLoading: function(request){
       //faça algo
    },
    isDone: function(request){
      //faça algo
    },
    opt: {
      method: "POST/GET",
      urlAction: "url request",
      data: "dados para enviar ao servidor no caso de POST"
    }
  });
</script>
```

### Autor

- Heiter Developer



### Licença

Licensed under the Apache License, Version 2.0 - Read [License](https://github.com/HeiterDeveloper/ajax-PUREjs/blob/master/LICENSE) file for more details.
