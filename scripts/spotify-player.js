window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQAgKOHJQYo503ZX2nSFl6i0wl2eADDpBhcPSy1QZIl-8xoqJj7IrheUQDRhxlLmaoaBybCzHFBRbJLGe8Oi6wMu5EYNyRy6t2VSQdFLC5agwHm2VvLm5SuAdEAvsQJFeHMg1HdiP_PfAIvFMsptQI2vId5v5yNuu6mwW6IOGXC2_KDrngMf1_g';
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => { cb(token); }
  });

  // Error handling
  player.addListener('initialization_error', ({ message }) => { console.error(message); });
  player.addListener('authentication_error', ({ message }) => { console.error(message); });
  player.addListener('account_error', ({ message }) => { console.error(message); });
  player.addListener('playback_error', ({ message }) => { console.error(message); });

  // Playback status updates
  player.addListener('player_state_changed', state => { console.log(state); });

  // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  // Connect to the player!
  player.connect();
};