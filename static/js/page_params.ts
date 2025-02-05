import $ from "jquery";

const t1 = performance.now();
export const page_params: {
    color_scheme: number;
    enable_desktop_notifications: boolean;
    enable_offline_email_notifications: boolean;
    enable_offline_push_notifications: boolean;
    enable_sounds: boolean;
    enable_stream_audible_notifications: boolean;
    enable_stream_desktop_notifications: boolean;
    enable_stream_email_notifications: boolean;
    enable_stream_push_notifications: boolean;
    language_list: {
        code: string;
        locale: string;
        name: string;
        percent_translated: number | undefined;
    }[];
    development_environment: boolean;
    is_admin: boolean;
    is_guest: boolean;
    is_moderator: boolean;
    is_spectator: boolean;
    realm_add_custom_emoji_policy: number;
    realm_avatar_changes_disabled: boolean;
    realm_create_stream_policy: number;
    realm_edit_topic_policy: number;
    realm_email_address_visibility: number;
    realm_invite_to_realm_policy: number;
    realm_invite_to_stream_policy: number;
    realm_move_messages_between_streams_policy: number;
    realm_name_changes_disabled: boolean;
    realm_push_notifications_enabled: boolean;
    realm_user_group_edit_policy: number;
    realm_waiting_period_threshold: number;
    request_language: string;
    server_avatar_changes_disabled: boolean;
    server_name_changes_disabled: boolean;
    translation_data: Record<string, string>;
    twenty_four_hour_time: boolean;
    wildcard_mentions_notify: boolean;
    zulip_plan_is_not_limited: boolean;
} = $("#page-params").remove().data("params");
const t2 = performance.now();
export const page_params_parse_time = t2 - t1;
if (!page_params) {
    throw new Error("Missing page-params");
}
