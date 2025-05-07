interface PageHeaderProps {
  title: string
  description?: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-4 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <div className="container flex max-w-[64rem] flex-col items-start gap-4 text-left">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">{title}</h1>
        {description && (
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">{description}</p>
        )}
      </div>
    </div>
  )
}
