<script setup lang="ts">
    const userStore = useUserStore()
</script>

<template>
  <header class="app-header">
    <NuxtLink to="/dashboard" class="logo-link">
      <MiniTrelloLogo />
    </NuxtLink>

    <nav class="header-nav">
      <NuxtLink to="/dashboard" class="nav-item active">
        <span class="prompt">></span> DASHBOARD
      </NuxtLink>
      <NuxtLink to="/dashboard/arkiv" class="nav-item">
        <span class="prompt">></span> ARKIV
      </NuxtLink>
      <NuxtLink to="/dashboard/innstillinger" class="nav-item">
        <span class="prompt">></span> INNSTILLINGER
      </NuxtLink>
    </nav>

    <div class="user-section" v-if="userStore.isAuthenticated">
      <div class="user-info">
        <img 
          :src="userStore.user?.avatarUrl" 
          alt="Avatar" 
          class="user-avatar"
        />
        <div class="user-meta">
          <span class="user-status">ONLINE</span>
          <span class="user-name">{{ userStore.user?.name }}</span>
        </div>
      </div>

      <button @click="userStore.logout" class="logout-btn">
        LOGG UT
      </button>
    </div>
  </header>
</template>

<style scoped>
    .app-header {
        background-color: #161B22;
        border-bottom: 1px solid #222C3A;
        padding: 12px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .logo-link {
        text-decoration: none;
    }

    /* Midtre navigasjon */
    .header-nav {
        display: flex;
        gap: 24px;
    }

    .nav-item {
        color: #64748B;
        text-decoration: none;
        font-family: 'SFMono-Regular', Consolas, monospace;
        font-size: 0.85rem;
        font-weight: 700;
        letter-spacing: 1px;
        transition: color 0.2s ease;
    }

    .nav-item .prompt {
        color: transparent; /* Skjuler > tegnet i starten */
        margin-right: 4px;
        transition: color 0.2s ease;
    }

    .nav-item:hover, .nav-item.active {
        color: #4DEEEA;
    }

    .nav-item:hover .prompt, .nav-item.active .prompt {
        color: #4DEEEA;
    }

    /* Høyre side: Brukerprofil */
    .user-section {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .user-info {
        display: flex;
        align-items: center;
        gap: 12px;
        border-right: 1px solid #222C3A;
        padding-right: 20px;
    }

    .user-avatar {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: #090D14;
        border: none;
        box-shadow: 0 0 8px rgba(77, 238, 234, 0.3);
    }

    .user-meta {
        display: flex;
        flex-direction: column;
    }

    .user-status {
        font-family: 'SFMono-Regular', Consolas, monospace;
        font-size: 0.6rem;
        color: #4DEEEA;
        letter-spacing: 1px;
        font-weight: bold;
    }

    .user-name {
        color: #E2E8F0;
        font-size: 0.9rem;
        font-weight: 600;
    }

    .logout-btn {
        background: transparent;
        color: #64748B;
        border: 1px solid #222C3A;
        padding: 8px 14px;
        border-radius: 4px;
        font-family: 'SFMono-Regular', Consolas, monospace;
        font-size: 0.75rem;
        font-weight: bold;
        letter-spacing: 1px;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .logout-btn:hover {
        background-color: #4DEEEA;
        color: #0D1117;
        border-color: #4DEEEA;
        box-shadow: 0 0 15px rgba(77, 238, 234, 0.5);
    }
</style>