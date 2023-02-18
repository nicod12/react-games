import BackComponent from "../components/BackComponent"
import MemoComponent from "../components/memotest/MemoComponent"

const MemoTestPage = () => {
  return(
    <div className="flex flex-col items-center">
           <MemoComponent />
           <BackComponent />
    </div>

  )
}

export default MemoTestPage