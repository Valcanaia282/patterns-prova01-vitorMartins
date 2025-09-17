class Button {
    render() {
      throw new Error("Método 'render()' deve ser implementado");
    }
  }
  
  class Window {
    render() {
      throw new Error("Método 'render()' deve ser implementado");
    }
  }
  
  class LightButton extends Button {
    render() {
      return "Botão branco criado";
    }
  }
  
  class DarkButton extends Button {
    render() {
      return "Botão preto criado";
    }
  }
  
  class LightWindow extends Window {
    render() {
      return "Janela clara aberta";
    }
  }
  
  class DarkWindow extends Window {
    render() {
      return "Janela escura aberta";
    }
  }
  
  class UIFactory {
    createButton() {
      throw new Error("Método 'createButton()' deve ser implementado");
    }
  
    createWindow() {
      throw new Error("Método 'createWindow()' deve ser implementado");
    }
  }
  
  class LightUIFactory extends UIFactory {
    createButton() {
      return new LightButton();
    }
  
    createWindow() {
      return new LightWindow();
    }
  }
  
  class DarkUIFactory extends UIFactory {
    createButton() {
      return new DarkButton();
    }
  
    createWindow() {
      return new DarkWindow();
    }
  }

  const theme = "dark";
  let factory;
  
  if (theme === "light") {
    factory = new LightUIFactory();
  } else {
    factory = new DarkUIFactory();
  }
  
  const button = factory.createButton();
  const windowUI = factory.createWindow();
  
  console.log(button.render());
  console.log(windowUI.render());
  