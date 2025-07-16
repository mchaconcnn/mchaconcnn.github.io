class XHRLoader {
  static async loadComponent(componentName, ) {
    try {
      // Load HTML
      const htmlResponse = await fetch(`./xhr/${componentName}.html`);
      const html = await htmlResponse.text();
      document.getElementById('app').innerHTML = html;
      // Load and execute JS

      const jsResponse = await fetch(`./xhr/${componentName}.js`);
      const jsText = await jsResponse.text();
      
      // Execute in context
      const script = document.createElement('script');
      script.textContent = jsText;
      document.head.appendChild(script);
      document.head.removeChild(script);
      
      return { html, executed: true };
    } catch (error) {
      console.error(`Failed to load component ${componentName}:`, error);
      return { error };
    }
  }
}


XHRLoader.loadComponent('qr');