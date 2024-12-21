import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"sign-in",
        loadComponent:()=> import("../pages/Auth/signin/signin.component").then(e => e.SigninComponent),  
    },
    {
        path:"",
        loadComponent:()=>import("../pages/components/layout/layout.component").then(e => e.LayoutComponent),
        children:[
            {
                path:"",
                loadComponent:()=>import("../pages/components/home/home.component").then(e => e.HomeComponent)
            },
            {
                path:"reels",
                loadComponent:()=>import("../pages/components/reels/reels.component").then(e => e.ReelsComponent)
            },
            {
                path:"subscription",
                loadComponent:()=>import("../pages/components/subscription/subscription.component").then(e => e.SubscriptionComponent)
            },
            {
                path:"history",
                loadComponent:()=>import("../pages/components/history/history.component").then(e => e.HistoryComponent)
            },
            {
                path:"playlists",
                loadComponent:()=>import("../pages/components/playlist/playlist.component").then(e => e.PlaylistComponent)
            },
            {
                path:"watch-list",
                loadComponent:()=>import("../pages/components/watchlist/watchlist.component").then(e => e.WatchlistComponent)
            },
            {
                path:"liked-video",
                loadComponent:()=>import("../pages/components/likedvideo/likedvideo.component").then(e => e.LikedvideoComponent)
            },
            {
                path:"your-clips",
                loadComponent:()=>import("../pages/components/yourclips/yourclips.component").then(e => e.YourclipsComponent)
            },
            {
                path:"your-videos",
                loadComponent:()=>import("../pages/components/yourvideo/yourvideo.component").then(e => e.YourvideoComponent)
            },
            {
                path:"profile",
                loadComponent:()=>import("../pages/components/profile/profile.component").then(e => e.ProfileComponent)
            },
        ]
    },
];
