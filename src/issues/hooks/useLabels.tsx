import {useQuery} from "@tanstack/react-query";
import {getLabels} from "../actions/get-labels.action.ts";
import {GithubLabel} from "../interfaces";

export const UseLabels = () => {
    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn:  getLabels,
        staleTime: 1000 * 60 * 60,

        // placeholderData: [
        //     {
        //         "id":6955781886,
        //         "node_id":"LA_kwDOAJy2Ks8AAAABnpjO_g",
        //         "url":"https://api.github.com/repos/facebook/react/labels/Compiler:%20todo",
        //         "name":"Compiler: todo",
        //         "color":"C2E0C6",
        //         "default":false,
        //     } satisfies GithubLabel,
        //     {
        //         "id":69105383,
        //         "node_id":"MDU6TGFiZWw2OTEwNTM4Mw==",
        //         "url":"https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
        //         "name":"Browser: IE",
        //         "color":"c7def8",
        //         "default":false,
        //     } satisfies GithubLabel,
        // ]

        initialData: [
                {
                    "id":6955781886,
                    "node_id":"LA_kwDOAJy2Ks8AAAABnpjO_g",
                    "url":"https://api.github.com/repos/facebook/react/labels/Compiler:%20todo",
                    "name":"Compiler: todo",
                    "color":"C2E0C6",
                    "default":false,
                } satisfies GithubLabel,
                {
                    "id":69105383,
                    "node_id":"MDU6TGFiZWw2OTEwNTM4Mw==",
                    "url":"https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
                    "name":"Browser: IE",
                    "color":"c7def8",
                    "default":false,
                } satisfies GithubLabel,
        ]
        
    })
    return {
        labelsQuery,
    }
}

