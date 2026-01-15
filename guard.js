function requireTier(required){
  const tier = localStorage.getItem("memberTier");

  const levels = {
    "CORE": 1,
    "PRIME": 2,
    "ELITE": 3
  };

  if(!tier || levels[tier] < levels[required]){
    document.body.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Inter">
        <div style="text-align:center">
          <h1>Access Denied</h1>
          <p>This section requires ${required} membership.</p>
        </div>
      </div>
    `;
  }
}
