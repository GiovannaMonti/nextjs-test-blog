import Link from "next/link"

type Props = {
  link: string
  title: string
  children?: JSX.Element
}

export const Card = (props: Props) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        {/* Another small Next builtin component to allow page routing */}
        <Link href={props.link}>
          <a>
            <h3 className="card-title text-primary">{props.title} &rarr;</h3>
            <>{props.children}</>
          </a>
        </Link>
      </div>
    </div>
  )
}
