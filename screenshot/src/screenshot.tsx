import { Action, ActionPanel, Icon, List } from "@vicinae/api";

import { runGrimblast } from "./utils";

const sc = [
  {
    title: "Capture Fullscreen",
    icon: Icon.Monitor,
    action: "screen -n",
  },
  {
    title: "Capture Area",
    icon: Icon.Crop,
    action: "area -f -n",
  },
  {
    title: "Capture Window",
    icon: Icon.AppWindow,
    action: "active -n",
  },
  {
    title: "Capture Fullscreen in 5s",
    icon: Icon.Clock,
    action: "screen -w 5 -n",
  },
];

export default function SimpleList() {
  return (
    <List
      searchBarPlaceholder="Search Screenshot Options"
      isShowingDetail={true}
    >
      {sc.map((s) => (
        <List.Item
          key={s.title}
          title={s.title}
          icon={s.icon}
          actions={
            <ActionPanel>
              <Action
                title="Take Screenshot"
                onAction={() => runGrimblast(s.action)}
              />
              <Action
                title="Take Screenshot & Open Editor"
                onAction={() => runGrimblast(s.action, true)}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
