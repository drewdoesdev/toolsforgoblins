import { useRouter } from 'next/router'

function ProductPage({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const products = await fetch('https://api.example.com/products')
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const product = await fetch(`https://api.example.com/products/${params.id}`)
  return { props: { product } }
}

export default ProductPage
