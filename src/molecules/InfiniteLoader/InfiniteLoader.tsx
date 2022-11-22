import MInfiniteLoader from "react-window-infinite-loader";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { useCallback, useState } from "react";
import { isItemLoaded } from "./utils/functions";

type InfiniteLoaderProps<T1, T2> = {
  ListItem: React.FunctionComponent<ListChildComponentProps<T2>>;
  loading?: boolean;
  data: T1[];
  itemData: T2;
  resolve: (page: number) => Promise<T1[]>;
  pageSize: number;
  onNextData?: (nextData: T1[]) => void;
  itemSize: number;
};

const DEFAULT_HEIGHT = 268;
const DEFAULT_WIDTH = 250;

export const InfiniteLoader = <T1, T2 extends any = any>({
  ListItem,
  loading,
  data,
  itemData,
  resolve,
  pageSize,
  onNextData,
  itemSize,
}: InfiniteLoaderProps<T1, T2>) => {
  const [hasNextPage, setHasNextPage] = useState(true);
  const [nextLoading, setNextLoading] = useState(false);

  const [listDimensions, setListDimensions] = useState({
    height: DEFAULT_HEIGHT,
    width: DEFAULT_WIDTH,
  });

  const handleLoadMore = async (startIndex: number) => {
    setNextLoading(true);
    const nextData = await resolve(Math.floor(startIndex / pageSize));
    if (nextData.length < pageSize) {
      setHasNextPage(false);
    }
    onNextData?.(nextData);
    setNextLoading(false);
  };

  const handleRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      setListDimensions({
        height: node?.getClientRects()?.[0].height ?? 268,
        width: node?.getClientRects()?.[0].width ?? 250,
      });
    }
  }, []);

  const handleItemLoaded = (index: number) =>
    isItemLoaded(index, hasNextPage && !loading && !nextLoading, data);
  const itemCount =
    hasNextPage && !loading && !nextLoading ? data.length + 1 : data.length;

  const { height } = listDimensions;

  return (
    <div ref={handleRef}>
      <MInfiniteLoader
        isItemLoaded={handleItemLoaded}
        itemCount={itemCount}
        loadMoreItems={handleLoadMore}
      >
        {(
          {
            onItemsRendered,
            ref,
          }: any /** Right now they dont provide types for their render props  */
        ) => (
          <List
            onItemsRendered={onItemsRendered}
            ref={ref}
            height={height}
            itemCount={itemCount}
            itemData={itemData}
            itemSize={itemSize}
            width="100%"
          >
            {ListItem}
          </List>
        )}
      </MInfiniteLoader>
    </div>
  );
};
