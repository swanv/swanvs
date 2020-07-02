<template>
  <nav class="q-pa-md q-gutter-y-sm">
    <div class="bg-cyan text-white">
      <q-toolbar>
        <q-btn flat round dense icon="menu" />
        <q-space />
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn flat round dense icon="gamepad" />
      </q-toolbar>

      <q-toolbar inset>
        <q-btn flat label="Home" to="/" />
        <q-btn flat label="Ping" to="/ping"></q-btn>
      </q-toolbar>
    </div>
  </nav>
</template>
