import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashbord')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ width: '200px', background: '#f4f4f4', padding: '1rem' }}>
        <h2>Sidebar</h2>
        <ul>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </aside>
      <main style={{ flex: 1, padding: '1rem' }}>
        <header style={{ marginBottom: '1rem' }}>
          <h1>Dashboard</h1>
        </header>
        <section>
          <p>Welcome to the dashboard!</p>
          <p>Here you can find various statistics and information.</p>
        </section>
      </main>
    </div>
  )
}
