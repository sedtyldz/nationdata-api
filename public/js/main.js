const menuItems = document.querySelectorAll('.sub-menu li');
const homeItem = document.querySelector('.menu-item.active');
const mainContent = document.querySelector('.main-content');

menuItems.forEach(item => {
  item.addEventListener('click', function() {
    const menuText = item.textContent.trim();
    
    // Home'dan active'i kaldır
    homeItem.classList.remove('active');
    
    if (menuText === 'By Country Name') {
      mainContent.innerHTML = `
        <div class="welcome-section">
          <h1>Search By Country Name</h1>
          <p>Get detailed information about a specific country by its name.</p>
        </div>
        <div class="info-section">
          <div class="info-card">
            <h2>📍 Endpoint</h2>
            <div class="code-example">
              <code>GET /api/country/:name</code>
            </div>
          </div>
          <div class="info-card">
            <h2>📝 Example</h2>
            <div class="code-example">
              <code>GET /api/country/turkey</code>
            </div>
          </div>
        </div>
      `;
    }
    
    else if (menuText === 'By Continent') {
      mainContent.innerHTML = `
        <div class="welcome-section">
          <h1>Search By Continent</h1>
          <p>Get all countries belonging to a specific continent.</p>
        </div>
        <div class="info-section">
          <div class="info-card">
            <h2>📍 Endpoint</h2>
            <div class="code-example">
              <code>GET /api/continent/:name</code>
            </div>
          </div>
          <div class="info-card">
            <h2>📝 Example</h2>
            <div class="code-example">
              <code>GET /api/continent/europe</code>
            </div>
          </div>
        </div>
      `;
    }
    
    else if (menuText === 'Country List') {
      mainContent.innerHTML = `
        <div class="welcome-section">
          <h1>Country List</h1>
          <p>Get a complete list of all available countries in the database.</p>
        </div>
        <div class="info-section">
          <div class="info-card">
            <h2>📍 Endpoint</h2>
            <div class="code-example">
              <code>GET /api/countries</code>
            </div>
          </div>
          <div class="info-card">
            <h2>📝 Response</h2>
            <p>Returns an array of all country names available in the API.</p>
          </div>
        </div>
      `;
    }
    
    else if (menuText === 'Continent List') {
      mainContent.innerHTML = `
        <div class="welcome-section">
          <h1>Continent List</h1>
          <p>Get a list of all continents.</p>
        </div>
        <div class="info-section">
          <div class="info-card">
            <h2>📍 Endpoint</h2>
            <div class="code-example">
              <code>GET /api/continents</code>
            </div>
          </div>
          <div class="info-card">
            <h2>📝 Response</h2>
            <p>Returns an array of all continent names: Africa, Asia, Europe, North America, South America, Oceania, Antarctica.</p>
          </div>
        </div>
      `;
    }
    
    else if (menuText === 'All Country Data') {
      mainContent.innerHTML = `
        <div class="welcome-section">
          <h1>All Country Data</h1>
          <p>Get comprehensive data for all countries in one request.</p>
        </div>
        <div class="info-section">
          <div class="info-card">
            <h2>📍 Endpoint</h2>
            <div class="code-example">
              <code>GET /api/all</code>
            </div>
          </div>
          <div class="info-card">
            <h2>⚠️ Note</h2>
            <p>This endpoint returns a large amount of data. Use with caution in production environments.</p>
          </div>
        </div>
      `;
    }
  });
});

// Home butonuna tıklandığında ana sayfayı geri getir
homeItem.addEventListener('click', function() {
  homeItem.classList.add('active');
  
  mainContent.innerHTML = `
    <div class="welcome-section">
      <h1>Welcome to NationData API</h1>
      <p>A free and open REST API providing comprehensive country data for developers worldwide.</p>
    </div>

    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">🌍</div>
        <h3>Global Coverage</h3>
        <p>Access detailed information about countries from all continents around the world.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>Fast & Reliable</h3>
        <p>Lightning-fast response times with 99.9% uptime guarantee for your applications.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">🔓</div>
        <h3>Free to Use</h3>
        <p>No authentication required. Start using the API immediately without any signup.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">📊</div>
        <h3>Rich Data</h3>
        <p>Comprehensive country data including demographics, geography, and more.</p>
      </div>
    </div>

    <div class="info-section">
      <div class="info-card">
        <h2>🚀 Getting Started</h2>
        <p>Start exploring the API by selecting an endpoint from the sidebar. Each endpoint provides specific country data that you can integrate into your applications.</p>
        <div class="code-example">
          <code>GET https://nationdata-api.com/api/countries</code>
        </div>
      </div>

      <div class="info-card">
        <h2>📖 About This Project</h2>
        <p>NationData API is a free, open-source project designed to provide developers with easy access to country information. Whether you're building a educational platform, analytics dashboard, or any application requiring country data, NationData has you covered.</p>
      </div>
    </div>
  `;
});