<template>
  <div class="route">
    <div>
      <div v-if="method.toLowerCase() === 'get'" class="method get">
        GET
      </div>
      <div v-else-if="method.toLowerCase() === 'post'" class="method post">
        POST
      </div>
      <div v-else-if="method.toLowerCase() === 'put'" class="method put">
        PUT
      </div>
      <div v-else-if="method.toLowerCase() === 'delete'" class="method delete">
        DELETE
      </div>
      <div v-else-if="method.toLowerCase() === 'patch'" class="method patch">
        PATCH
      </div>
      <div v-else class="method">
        {{ method }}
      </div>
      <pre><code>{{ route }}</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouteHighlighter',
  props: {
    method: {
      type: String,
      default: '',
      validator: function (x) {
        return ['get', 'post', 'put', 'patch', 'delete'].includes(
          x.toLowerCase()
        )
      },
    },
    route: {
      type: String,
      default: 'my/route',
    },
  },
}
</script>

<style lang="css" scoped>
div.route {
  display: inline-block;
  width: 100%;
}

.route > div {
  display: inline;
}

.route > div.method.get {
  background-color: #61affe;
  color: white;
}

.route div.method.post {
  background-color: #49cc90;
  color: white;
}

.route div.method.put {
  background-color: #fca130;
  color: white;
}

.route div.method.delete {
  background-color: #f93e3e;
  color: white;
}

.route div.method.patch {
  background-color: #50e3c2;
  color: white;
}

.route > div > div {
  line-height: 1.4;
  padding: 1.25rem 1.5rem;
  margin: 0.85rem 0;
  background-color: #61affe;
  border-radius: 6px 0px 0px 6px;
  overflow: auto;
  color: white;
  font-weight: bold;
  float: left;
}

.route > div > pre {
  border-radius: 0px 6px 6px 0px;
}
</style>
