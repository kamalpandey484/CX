const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full min-h-screen min-w-screen flex-col items-center justify-around">
      {children}
    </div>
  )
}

export default Layout
