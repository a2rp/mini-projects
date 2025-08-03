import { useState } from "react";
import { DetailsWrapper, Heading, Info, ListWrapper, Main, Wrapper } from "./styled";
import BubbleSortVisualizer from "./BubbleSortVisualizer";
import QuickSortVisualizer from "./QuickSortVisualizer";
import MergeSortVisualizer from "./MergeSortVisualizer";
import InsertionSortVisualizer from "./InsertionSortVisualizer";
import SelectionSortVisualizer from "./SelectionSortVisualizer"; // ⬅️ Add this
import AStarVisualizer from "./AStarVisualizer";
import HeapSortVisualizer from "./HeapSortVisualizer";
import LinearSearchVisualizer from "./LinearSearchVisualizer";
import RadixSortVisualizer from "./RadixSortVisualizer";
import ShellSortVisualizer from "./ShellSortVisualizer";
import CountingSortVisualizer from "./CountingSortVisualizer";

const Sorting = () => {
    const [selectedAlgorithm, setSelectedAlgorithm] = useState("bubblesort");

    return (
        <Wrapper>
            <Heading>Sorting</Heading>
            <Info>Click on any sorting algo. below to visualize its working</Info>
            <Main>
                <ListWrapper>
                    <ul>
                        <li
                            onClick={() => setSelectedAlgorithm("bubblesort")}
                            className={`${selectedAlgorithm === "bubblesort" ? "active" : ""}`}
                        >
                            Bubble Sort
                        </li>
                        <li
                            onClick={() => setSelectedAlgorithm("quicksort")}
                            className={`${selectedAlgorithm === "quicksort" ? "active" : ""}`}
                        >
                            Quick Sort
                        </li>
                        <li
                            onClick={() => setSelectedAlgorithm("mergesort")}
                            className={`${selectedAlgorithm === "mergesort" ? "active" : ""}`}
                        >
                            Merge Sort
                        </li>
                        <li
                            onClick={() => setSelectedAlgorithm("insertionsort")}
                            className={`${selectedAlgorithm === "insertionsort" ? "active" : ""}`}
                        >
                            Insertion Sort
                        </li>
                        <li
                            onClick={() => setSelectedAlgorithm("selectionsort")}
                            className={`${selectedAlgorithm === "selectionsort" ? "active" : ""}`}
                        >
                            Selection Sort
                        </li>
                        <li
                            onClick={() => setSelectedAlgorithm("astar")}
                            className={`${selectedAlgorithm === "astar" ? "active" : ""}`}
                        >
                            A* Search
                        </li>
                        <li
                            onClick={() => setSelectedAlgorithm("heapsort")}
                            className={`${selectedAlgorithm === "heapsort" ? "active" : ""}`}
                        >
                            Heap Sort
                        </li>
                        <li
                            onClick={() => setSelectedAlgorithm("linearsearch")}
                            className={`${selectedAlgorithm === "linearsearch" ? "active" : ""}`}
                        >
                            Linear Search
                        </li>
                        <li
                            onClick={() => setSelectedAlgorithm("radixsort")}
                            className={`${selectedAlgorithm === "radixsort" ? "active" : ""}`}
                        >
                            Radix Sort
                        </li>
                        <li
                            onClick={() => setSelectedAlgorithm("shellsort")}
                            className={`${selectedAlgorithm === "shellsort" ? "active" : ""}`}
                        >
                            Shell Sort
                        </li>
                        <li
                            onClick={() => setSelectedAlgorithm("countingsort")}
                            className={`${selectedAlgorithm === "countingsort" ? "active" : ""}`}
                        >
                            Counting Sort
                        </li>
                    </ul>
                </ListWrapper>

                <DetailsWrapper>
                    {selectedAlgorithm === "bubblesort" && (
                        <BubbleSortVisualizer />
                    )}
                    {selectedAlgorithm === "quicksort" && (
                        <QuickSortVisualizer />
                    )}
                    {selectedAlgorithm === "mergesort" && (
                        <MergeSortVisualizer />
                    )}
                    {selectedAlgorithm === "insertionsort" && (
                        <InsertionSortVisualizer />
                    )}
                    {selectedAlgorithm === "selectionsort" && (
                        <SelectionSortVisualizer />
                    )}
                    {selectedAlgorithm === "astar" && <AStarVisualizer />}
                    {selectedAlgorithm === "heapsort" && <HeapSortVisualizer />}
                    {selectedAlgorithm === "linearsearch" && (
                        <LinearSearchVisualizer />
                    )}
                    {selectedAlgorithm === "radixsort" && (
                        <RadixSortVisualizer />
                    )}
                    {selectedAlgorithm === "shellsort" && (
                        <ShellSortVisualizer />
                    )}
                    {selectedAlgorithm === "countingsort" && (
                        <CountingSortVisualizer />
                    )}
                </DetailsWrapper>
            </Main>
        </Wrapper>
    );
};

export default Sorting;
