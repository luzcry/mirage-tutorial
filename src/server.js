import { createServer, Model } from "miragejs"

export default function () {
  return createServer({
    models: {
      reminder: Model,
    },

    routes() {
      this.get("/api/reminders", (schema) => {
        return schema.reminders.all()
      })

      let newId = 4
      this.post("/api/reminders", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        attrs.id = newId++

        return { reminder: attrs }
      })
    },
  })
}
