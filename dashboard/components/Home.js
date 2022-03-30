let data = {
    name: 'there',
    plan: 'test'
}

export const Home = `
        <h1 class="bold">Hi, ${data.name}</h1>
        <div id="current-plan">
            <div>
                ${data.plan}
            </div>
            <div>
                Plan
            </div>
        </div>
        <div id="activity">
            <div>
                <h2 class="bold">Premium</h2>
                <div class="chart card">
                    <div class="chart-card">
                        <div class="left">
                        <span>
                            <i class="las la-user"></i>
                        </span>
                        </div>
                        <div class="right">
                            <p class="bold">2</p>
                            <p>Active Users</p>
                        </div>
                    </div>
                    <div id="chart"></div>
                </div>
            </div>
            <div>
                <h2 class="bold">My Library</h2>
                <div class="library">
                    <ul>
                        <li><a href="#" class="sub-nav-links" data-url="/dashboard/watch-later" tabindex="0" role="link"><i class="lab la-youtube"></i> Watch Later</a></li>
                        <li><a href="#" class="sub-nav-links" data-url="/dashboard/recently-played" tabindex="0" role="link"><i class="las la-play-circle"></i> Recently Played</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `;