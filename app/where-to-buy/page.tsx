import Mapview from '@/components/Mapview'

export default function WhereToBuyPage() {
  return (
      <div className='py-32 flex flex-col space-y-8'>
          <div className='text-center text-2xl font-bold'>
              Where to buy
          </div>

          <Mapview />
    </div>
  )
}
