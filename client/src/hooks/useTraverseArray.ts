import { Signal } from '@preact/signals-react'
import { currentSection, isFinished } from '../store'

type ArraySection = {
  getNextSection: () => void
}
const currentIndex = new Signal<number>(0)

function useTraverseArray<T>(array: T[], sectionSize: number): ArraySection {
  console.debug('TraverseArray::array:length', array.length)
  console.debug('TraverseArray::sectionSize', sectionSize)
  console.debug('TraverseArray::currentIndex', currentIndex.value)
  const getNextSection = () => {
    if (currentIndex.value >= array.length) {
      isFinished.value = true
      console.debug('TraverseArray::isFinished', isFinished.value)
    } else {
      console.debug('TraverseArray::Updating currentSection & currentIndex')
      console.debug('TraverseArray::typeof sectionSize', typeof sectionSize)
      currentIndex.value += sectionSize

      if (currentIndex.value + sectionSize >= array.length) {
        currentSection.value = currentSection.value.concat([
          ...array.slice(currentIndex.value, array.length),
        ])
        //colored console.log with css red background black letters
        console.debug(
          '%c====>>>>TraverseArray::currentSection',
          'background: red; color: black',
          currentSection.value
        )
      } else {
        currentSection.value = currentSection.value.concat([
          ...array.slice(
            currentSection.value.length,
            currentSection.value.size + sectionSize
          ),
        ])
        console.debug(
          '%c====>>>>TraverseArray::currentSection',
          'background: red; color: black',
          currentSection.value
        )
      }
    }
    console.debug('TraverseArray::currentSection', currentSection.value)
    console.debug('TraverseArray::currentIndex', currentIndex.value)
  }
  return {
    getNextSection,
  }
}

export default useTraverseArray
